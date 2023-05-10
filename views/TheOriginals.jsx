const React = require('react');

function Index(props) {
    const {originalscasts} = props;

    return (
        <div>
            <h1 style={{color: "#78290f"}}>🎥 The Originals</h1>
            <ul>
                {originalscasts.map((originalscast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {originalscast.name} plays
                        {' '}
                        {originalscast.character}. <br></br> 
                        <b>Occupation: </b>{originalscast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{originalscast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
