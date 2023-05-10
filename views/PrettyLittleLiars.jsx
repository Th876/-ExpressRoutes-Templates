const React = require('react');

function Index(props) {
    const {prettylittleliarscasts} = props;

    return (
        <div>
            <h1 style={{color: "#ffc300"}}>🎥 Pretty Little Liars</h1>
            <ul>
                {prettylittleliarscasts.map((prettylittleliarscast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {prettylittleliarscast.name} plays
                        {' '}
                        {prettylittleliarscast.character}. <br></br> 
                        <b>Occupation: </b>{prettylittleliarscast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{prettylittleliarscast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
