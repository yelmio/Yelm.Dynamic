import Link from "next/link"

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>Страница не найдена.</h1>
      <span>Воспользуйтесь навигацией для перехода на страницу</span>
      <Link href="/"><button className="btn btn_medium">На главную</button></Link>
    </div>
   );
}
 
export default NotFound;