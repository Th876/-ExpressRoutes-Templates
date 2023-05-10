const React = require('react');

function Index(props) {
    const {vampdiariescasts} = props;

    return (
        <div>
            <h1 style={{color: "#5a189a"}}>🎥 The Vampire Diaries</h1>
            <ul>
                {vampdiariescasts.map((vampdiariescast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {vampdiariescast.name} plays
                        {' '}
                        {vampdiariescast.character}. <br></br> 
                        <b>Occupation: </b>{vampdiariescast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{vampdiariescast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
