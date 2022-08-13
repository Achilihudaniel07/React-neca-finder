import CardList from './CardList';

function CardList2(props){
    return(
        <div className='cardlist2' style={{display: "flex", justifyContent: "center"}}>
            {
            props.userss.map((userz) =>(
            <CardList
            key={userz.id.toString()}
            name={userz.name}
            image={userz.image}
            mfriends={userz.mfriends}
            friends={userz.friends}
            friends2={userz.friends2}
            location={userz.location}
            />
            ))         
            }
            {/* <CardList /> */}

        </div>        
    )
}

export default CardList2;