const React = require('react');

function Index(props) {
    const {reigncasts} = props;

    return (
        <div>
            <h1 style={{color: "#ce4257"}}>🎥 Reign</h1>
            <ul>
                {reigncasts.map((reigncast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {reigncast.name} plays
                        {' '}
                        {reigncast.character}. <br></br> 
                        <b>Occupation: </b>{reigncast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{reigncast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
