import {useState,useEffect} from 'react';
function Cards(props){
    const [imageIds,setImageIds]=useState([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
    ]);
    const imageUrls=[
        {id:1, url: "https://static.wikia.nocookie.net/hollowknight/images/e/e6/Broken_Vessel_Icon.png", name: "Broken Vessel" },
        {id:2, url: "https://static.wikia.nocookie.net/hollowknight/images/6/6f/Brooding_Mawlek_Icon.png", name: "Brooding Mawlek" },
        {id:3, url: "https://static.wikia.nocookie.net/hollowknight/images/6/63/Brothers_Oro_%26_Mato_Icon.png", name: "Brothers Oro & Mato" },
        {id:4, url: "https://static.wikia.nocookie.net/hollowknight/images/9/9e/The_Collector_Icon.png", name: "The Collector" },
        {id:5, url: "https://static.wikia.nocookie.net/hollowknight/images/a/af/Crystal_Guardian_Icon.png", name: "Crystal Guardian" },
        {id:6, url: "https://static.wikia.nocookie.net/hollowknight/images/b/bd/Dung_Defender_Icon.png", name: "Dung Defender" },
        {id:7, url: "https://static.wikia.nocookie.net/hollowknight/images/c/c2/False_Knight_Icon.png", name: "False Knight" },
        {id:8, url: "https://static.wikia.nocookie.net/hollowknight/images/6/61/Flukemarm_Icon.png", name: "Flukemarm" },
        {id:9, url: "https://static.wikia.nocookie.net/hollowknight/images/1/19/God_Tamer_Icon.png", name: "God Tamer" },
        {id:10, url: "https://static.wikia.nocookie.net/hollowknight/images/5/58/Great_Nailsage_Sly_Icon.png", name: "Great Nailsage Sly" },
        {id:11, url: "https://static.wikia.nocookie.net/hollowknight/images/2/23/Troupe_Master_Grimm_Icon.png", name: "Troupe Master Grimm" },
        {id:12, url: "https://static.wikia.nocookie.net/hollowknight/images/e/e2/Gruz_Mother_Icon.png", name: "Gruz Mother" },
        {id:13, url: "https://static.wikia.nocookie.net/hollowknight/images/5/5f/Hive_Knight_Icon.png", name: "Hive Knight" },
        {id:14, url: "https://static.wikia.nocookie.net/hollowknight/images/2/24/The_Hollow_Knight_Icon.png", name: "The Hollow Knight" },
        {id:15, url: "https://static.wikia.nocookie.net/hollowknight/images/e/e9/Hornet_Protector_Icon.png", name: "Hornet Protector" },
        {id:16, url: "https://static.wikia.nocookie.net/hollowknight/images/b/b2/Mantis_Lords_Icon.png", name: "Mantis Lords" },
    ];
    function shuffleArray(array) {
      let shuffledArray=[...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
    useEffect(() => {
      const newArray=shuffleArray(imageIds);
      setImageIds(newArray);
    },[]);
    useEffect(() => {
        function handleClick(e){
          const newArray=shuffleArray(imageIds);
          setImageIds(newArray);
          let findValue=props.clicked.find((id)=> parseInt(id) === parseInt(e.currentTarget.dataset.id));
          if(findValue===undefined){
            props.setClicked([...props.clicked,e.currentTarget.dataset.id]);
          }else{
            if(props.bestScore<props.clicked.length){
              props.setBestScore(props.clicked.length);
            }
            props.setClicked([]);
          }
        };
    
        const divs = document.querySelectorAll(".card");
    
        divs.forEach((div) => {
          div.addEventListener("click", handleClick);
        });
    
        return () => {
          divs.forEach((div) => {
            div.removeEventListener("click", handleClick);
          });
        };
    });
    return (
        <div className="cards">
            {imageIds.map((id) => {
                const image = imageUrls.find((img) => img.id === id);
                return (
                    <div className="card" data-id={id} key={id}>
                        <img src={image.url} alt={image.name} />
                        <div className="imageName">{image.name}</div>
                    </div>
                );
            })}
        </div>
    );
}
export default Cards;