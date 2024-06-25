"use client";

import React, { useEffect, useState, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
// import {LatLong} from '@/types'

const libs: Library[] = ["core", "places"];

const PlaceAutocomplete = ({
  type,
  placeholder,
  control,
  name,
  errorMsg,
  register,
  setValue,
  lat,
  lng,
  ...rest
}: any) => {
  const [autoComplete, setAutoComplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | undefined>(
    undefined
  );
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    libraries: libs,
  });
  const placesAutoCompleteRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let gAutoComplete: google.maps.places.Autocomplete | null = null;
    if (isLoaded) {
      const ontarioBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng({ lat: 11.127123, lng: 78.656891 }),
        new google.maps.LatLng({ lat: 28.3838, lng: 97.3956 })
      );

      gAutoComplete = new google.maps.places.Autocomplete(
        document.getElementById(name) as HTMLInputElement,
        {
          bounds: ontarioBounds,
          fields: ["formatted_address", "geometry", "name"],
          componentRestrictions: {
            country: ["in"],
          },
        }
      );

      console.log(gAutoComplete);
      setAutoComplete(gAutoComplete);
    }

    return () => {
      if (gAutoComplete) {
        // Clean up autocomplete instance if needed
        gAutoComplete.unbindAll();
      }
    };
  }, [isLoaded, name, placesAutoCompleteRef, register]);

  useEffect(() => {
    if (autoComplete) {
      autoComplete.addListener("place_changed", () => {
        const place = autoComplete?.getPlace();

        if (place && place.formatted_address) {
          console.log(place);
          setValue(name, place.formatted_address);
          // console.log(lat, place.geometry?.location?.lat());
          // console.log(lat, place.geometry?.location?.lat());
          setValue(lat, place.geometry?.location?.lat());
          setValue(lng, place.geometry?.location?.lng());
        }
      });
    }
  }, [autoComplete, lat, lng, name, setValue]);

  return (
    <div>
      {/* <input
      type="text"
      id="autoComplete"
      name="autoComplete"
      placeholder="Enter Address"
      className="mt-1 w-80 md:w-96 p-3 block shadow-sm sm:text-sm border-gray-300 rounded-md"
      ref={placesAutoCompleteRef}
    /> */}

      {/* <Controller
        name={`${name}`}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            // ref={placesAutoCompleteRef}
            type={type}
            id={name}
            placeholder={placeholder}
            defaultValue={field.value || ""} 
            onChange={(e)=>field.onChange(selectedPlace)}
            // onChange={(e)=>{
            //   console.log(autoComplete?.get('formatted_address'))
            //   field.onChange(placesAutoCompleteRef.current?.value)
            // }} 
          />
        )}
      /> */}
      <input type="hidden" {...register(lat)} />
      <input type="hidden" {...register(lng)} />
      <Input
        {...register(name)}
        id={name}
        placeholder={placeholder}
        // ref={placesAutoCompleteRef}
      />
    </div>
  );
};

export default PlaceAutocomplete;
