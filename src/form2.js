import { useSelector, useDispatch } from 'react-redux'

export  const Lalu=()=>{
    const kalu = useSelector((state) => state.counter.value)
return <h1>thanks:{kalu}</h1>
}