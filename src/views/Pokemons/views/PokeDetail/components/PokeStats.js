export default function PokeStats({stats}) {
  return(
    <>
      {stats?.map(({stat, base_stat}, index) =>(
        <div key={index}>
          <p>{`${stat.name}: ${base_stat}`}</p>
        </div>
      ))}
    </>
  )
}