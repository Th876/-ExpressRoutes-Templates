const React = require('react');

function Index(props) {
    const {supermancasts} = props;

    return (
        <div>
            <h1 style={{color: "#004e98"}}>🎥 Superman</h1>
            <ul>
                {supermancasts.map((supermancast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {supermancast.name} plays
                        {' '}
                        {supermancast.character}. <br></br> 
                        <b>Occupation: </b>{supermancast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{supermancast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
