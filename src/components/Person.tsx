import {FC , useState} from 'react'

export enum HairColor {
    Blonde = "Your hair is Blonde , good four you",
    Brown = "Cool hair color",
    Pink = "Wow that is so cool",
}

interface Props {
    name : string;
    email : string;
    age : number;
    hairColor : HairColor;
}


const Person : FC<Props> = ({name , email , age , hairColor}) => {
   
    const [country, setCountry] = useState<string | null>("")
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }

  return (
    <>
    <h1>{name}</h1>
    <h1>{email}</h1>
    <h1>{age}</h1>
    <input 
    placeholder='Write down your country...'
    onChange={handleChange}
    />
    {country}
    {hairColor}
    </>
  )
}

export default Person