import type { Metadata } from 'next'
import { Input } from "@/components/ui/input"
import{  Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage} from "@/components/ui/form"

export const metadata:Metadata =  {
    title: 'About | Keedriver',
    description: 'About Page',
}

export default function form(){
    return(
        <>        <div className="max-w-md mx-auto mt-8">
            
            <h1>welcome to drive form</h1>
            <h1>Add driver</h1>
            <h1>Driver information</h1>
            <form className="space-y-4">
            <div className="flex items-center">
  <label className="mr-2">First Name:</label>
  <Input type="text" id="first-name" className="w-48" />
</div>
<div className="flex items-center">
  <FormLabel className="mr-2">Last Name:</FormLabel>
  <Input type="text" id="last-name" className="w-48" />
</div>
<div className="flex items-center">
  <label className="mr-2">E-mail:</label>
  <Input type="email" id="email" className="w-48" />
</div>
<div className="flex items-center">
  <label className="mr-2">Phone-number:</label>
  <Input className="w-48" />
  <FormDescription>
only enter 10 digits phone number, should not contain '+91' and spaces
              </FormDescription>
              <FormMessage />
</div>

            </form>
        </div>

        <div>
<h1>Driver profile</h1>
        </div>
        </>

    )
}