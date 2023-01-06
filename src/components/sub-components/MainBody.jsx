export default function MainBody({user}) {
  return (
    <div
      className="d-flex gap-4 flex-wrap mt-5 justify-content-around"
      style={{ width: "65vw" }}
    >
  
   {user.map((e)=>{
    return(
      <div className="border bg-primary w-25">
        <h1>{e.first}</h1>
        <h2>{e.last}</h2>
        <p>{e.email}</p>
        <p>{e.address}</p>
        <p>{e.created}</p>
        <p>{e.balance}</p>
      </div>
    )
   })}
    </div>
  );
}
