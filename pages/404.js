import Link from "next/link"

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>Упс, что-то пошло не так</h1>
      <p>Вернитесь назад - <Link href="/"><a>Домой</a></Link></p>
    </div>
   );
}
 
export default NotFound;