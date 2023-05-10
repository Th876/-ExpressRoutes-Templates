const React = require('react');

function Index(props) {
    const {youcasts} = props;

    return (
        <div>
            <h1 style={{color: "#fb8500"}}>🎥 You </h1>
            <ul>
                {youcasts.map((youcast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {youcast.name} plays
                        {' '}
                        {youcast.character}. <br></br> 
                        <b>Occupation: </b>{youcast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{youcast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
