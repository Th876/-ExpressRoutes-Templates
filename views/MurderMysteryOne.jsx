const React = require('react');

function Index(props) {
    const {mysteryonecasts} = props;

    return (
        <div>
            <h1 style={{color: "#023047"}}>🎥 Murder Mystery 1️ </h1>
            <ul>
                {mysteryonecasts.map((mysteryonecast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {mysteryonecast.name} plays
                        {' '}
                        {mysteryonecast.character}. <br></br> 
                        <b>Occupation: </b>{mysteryonecast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{mysteryonecast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
