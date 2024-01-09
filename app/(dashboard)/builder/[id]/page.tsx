import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";


async function BuilderPage({params}:{params:{
  id:string,
}}) {
  const {id}=params;
  const form=await GetFormById(Number(id));
  // console.log(form);
  // if(!form){
  //   throw new Error("Form not found")
  // }
  return (
  <FormBuilder form={form} />
  )
}

export default BuilderPage;