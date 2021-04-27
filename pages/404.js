import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])

  return ( 
    <div className="not-found">
      <h1>Упс, что-то пошло не так</h1>
      <p>Вернитесь назад - <Link href="/"><a>Домой</a></Link></p>
    </div>
   );
}
 
export default NotFound;