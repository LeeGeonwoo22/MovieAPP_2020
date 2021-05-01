import React from 'react' ;

function Food(props) {
  console.log(props.name)
  console.log(props)
  return <div>
    <h1>I like {props.name} </h1>
    <img src={props.picture}></img>
    </div>
  }
  
  const foodIlike = [
    {
      name : 'kimchi',
      image : 'http://www.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg'
    },
    {
      name : 'ramen',
      image : 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg'
    },
    {
      name : 'samgiopsal',
      image : 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200'
    },
    {
      name : 'chukumi',
      image : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn2t4f%2FbtqztsQj9il%2FAvwIFwb21hKWDXKPCiWIw1%2Fimg.png'
    }
  ]

  function renderFood(dish){
    console.log('dish :',dish)
    return <Food name={dish.name} picture={dish.image} />
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