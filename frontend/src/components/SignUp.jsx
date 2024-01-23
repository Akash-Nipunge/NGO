import { useState } from "react";
import { MdCastForEducation } from "react-icons/md";


export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [midlename, setMidlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const upload = multer()
  function HandleSubmit(e){
    e.preventDefault();
    // upload.single('./public')
    console.log({username,password,email});
  }
  return (
    <div>
    <div className="flex m-auto gap-1 text-emerald-700 w-fit align-middle flex-col items-center bold my-8 text-3xl font-medium max-sm:text-2xl">
        <MdCastForEducation/>NGO
    </div>
    <div className="w-1/3 m-auto max-lg:w-1/2 max-sm:w-4/5">
      <form onSubmit={(e)=>HandleSubmit(e)}>
        <input
          type="text"
          placeholder="firstname"
          value={firstname}
          autoFocus
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-emerald-500  focus:ring-1 focus:emerald-500"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="midlename"
          value={midlename}
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-emerald-500  focus:ring-1 focus:emerald-500"
          onChange={(e) => setMidlename(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-emerald-500  focus:ring-1 focus:emerald-500"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-emerald-500  focus:ring-1 focus:emerald-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-emerald-500  focus:ring-1 focus:emerald-500"
          onChange={(e) => setPassword(e.target.value)}
        />
          <button
            type="submit"
            className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-emerald-700 text-white hover:bg-emerald-800">
            Register
          </button>
      </form>
    </div>
    </div>
  );
}