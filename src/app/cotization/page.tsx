"use client"
import { useState } from "react"

export default function Page() {
  const [text, setText] = useState("inicio")
  const [liked, setLiked] = useState(false)

  const [name, setName] = useState('');
  const [age, setAge] = useState(42);
  console.log(name)
  console.log(age)

  function handleChange(e: any): void {
    setText(e.target.value)
  }

  const handleBolean = (event: any): void => {
    setLiked(event.target.checked)
  }

  return (
    <>
    <section className="grid place-content-center gap-5">

      <div>
        <input value={text} onChange={handleChange} className="bg-purple-300" />
        <p>Escribiste: {text}</p>
        <button onClick={() => setText("valor inicial")}>Reiniciar</button>
      </div>

      <div>
        <label aria-autocomplete="both">
         <input type="checkbox" checked={liked} onChange={handleBolean} />
            liked
        </label>
        <p>{liked ? 'te' : 'no te' } gusta esto</p>
      </div>

      <div>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="escribe tu numbre"
      />
      <button onClick={() => setAge(prevAge => age + 1)}>
        Incrementar edad
      </button>
      <p>Hola, {name}. Tienes {age} años.</p>
      </div>
    </section>
    </>
  )
}
