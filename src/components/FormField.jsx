
import { Input, Label } from "@/components/ui";

const FormField = ({ id, label, register, errors }) => (
  <div className="grid grid-cols-4 items-center gap-16">
    <Label htmlFor={id} className="text-right">
      {label}
    </Label>
    <Input id={id} {...register(id)} className="col-span-3" />
    {errors[id] && <p>{errors[id].message}</p>}
  </div>
);

export default FormField;
