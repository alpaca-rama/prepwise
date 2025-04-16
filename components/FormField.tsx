import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
}

export default function FormFieldComponent<T extends FieldValues>({ control, name, label, placeholder, type = 'text' }: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={'label'}>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} className={'input'} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}