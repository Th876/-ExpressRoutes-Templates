const React = require('react');

function Index(props) {
    const {mysterytwocasts} = props;

    return (
        <div>
            <h1 style={{color: "#a3b18a"}}>🎥 Murder Mystery 12 </h1>
            <ul>
                {mysterytwocasts.map((mysterytwocast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {mysterytwocast.name} plays
                        {' '}
                        {mysterytwocast.character}. <br></br> 
                        <b>Occupation: </b>{mysterytwocast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{mysterytwocast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
