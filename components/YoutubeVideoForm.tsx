import Form from "next/form";

function YoutubeVideoForm() {
  return (
    <div>
        <Form
        action={() =>  {}}
        className="flex flex-col sm:flex-row gap-2 items-center"    
        >
        <input type="text" name="url" placeholder="Enter Youtube URL" />    
        </Form>
    </div>
  )
}

export default YoutubeVideoForm