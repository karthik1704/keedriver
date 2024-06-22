'use client'

import React, { useEffect, useRef, useState } from 'react';
import {useJsApiLoader} from '@react-google-maps/api';
import {Library} from '@googlemaps/js-api-loader';
import { Input } from "@/components/ui/input";
// import {LatLong} from '@/types'



const libs:Library[] = ["core","maps","places","marker"];

function PlaceAutocomplete({type,placeholder,Controller,control,name,errorMsg,...rest}:any) {
 
  const[autoComplete,setAutoComplete] =useState<google.maps.Map | null>(null);
  const{isLoaded} = useJsApiLoader({
    googleMapsApiKey:'AIzaSyB3k_8la5j1di-9NZE3xkfOWGwA81aljRE',
    libraries:libs
  })
  const placesAutoCompleteRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{

    if(isLoaded){
      const ontarioBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng({lat:11.127123,lng:78.656891}),
          new google.maps.LatLng({lat:28.3838,lng:97.3956})
      )

      
      const gAutoComplete = new google.maps.places.Autocomplete(placesAutoCompleteRef.current as HTMLInputElement,{
        bounds:ontarioBounds,
        fields:['formatted_address','geometry','name'],
        componentRestrictions:{
          country:['in'],
          
        }
      })

      console.log(gAutoComplete);
      setAutoComplete(gAutoComplete);
    }
  },[isLoaded])
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

<Controller
    name={`${name}`}
    control={control}
    render={({ field }) => (
        <Input 
            {...field} 
            ref={placesAutoCompleteRef} 
            type={type} 
            placeholder={placeholder} 
        />
    )}
/>
    
  </div>
  )
}

export default PlaceAutocomplete;