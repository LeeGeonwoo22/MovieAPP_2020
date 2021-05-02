import React from 'react' ;

  const foodIlike = [
    {
      id : 1,
      name : 'kimchi',
      image : 'http://www.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg',
      rating : 4.5
    },
    {
      id : 2,
      name : 'ramen',
      image : 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
      rating : 4.3
    },
    {
      id : 3,
      name : 'samgiopsal',
      image : 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200',
      rating : 4.5
    },
    {
      id : 4,
      name : 'chukumi',
      image : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn2t4f%2FbtqztsQj9il%2FAvwIFwb21hKWDXKPCiWIw1%2Fimg.png',
      rating : 4.5
    }
  ]

  function Food(props) {
  
    return (
    <div>
      <h1>I like {props.name} </h1>
      <h2>{props.rating} / 5</h2>
      <img src={props.picture} alt={props.name}></img>
      </div>
    )
  }

// Food.propTypes = {
//   name : ProtoTypes.string.isRequired,
//   picture : ProtoTypes.string.isRequired,
//   rating : ProtoTypes.number
// };

  function renderFood(dish){
    console.log('dish :',dish)
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating ={dish.rating}/>
  };


  function App() {
    return (
    <div>
    
      {/* 맵이 하는것은 렌더링이다.  */}
{/* 
      {foodIlike.map(data =>
        <Food name={data.name} picture={data.image} />
      )}; */}

      {/* renderFood함수 호출 */}
      {console.log(foodIlike.map(renderFood))}
      {foodIlike.map(renderFood)}

  </div>
    )
  };

export default App;

// function Food(props) {
//   return <h1>I like { props.fav}</h1>;
//   }
  
//   function App() {
//     return (
//     <div>
//       <h1>Hello World !!</h1>
//       <Food fav='kimchi'  />
//       <Food fav='ramen' />
//       <Food fav='samgiopsal' />
//       <Food fav='chukumi' />
      
//       </div>
//     );
//   }


{/* <Food fav='kimchi'  />
      <Food fav='ramen' />
      <Food fav='samgiopsal' />
      <Food fav='chukumi' /> */}