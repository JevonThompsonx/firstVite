import Nav from "../components/Nav";

const preventDefault = (event: FormEvent) => {
  event.preventDefault();
  console.log("Form reload succesfully prevented");
};

export default function FormTest() {
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <Nav />
      <form className="w-fit h-fit p-4 border border-sky-500">
        <p>Form: </p>
        <input
          className="p-1 text-sky-400 border border-red-300"
          onClick={preventDefault}
          type="submit"
        />
      </form>
    </div>
  );
}
