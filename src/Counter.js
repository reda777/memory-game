function Counter(props){
    return (
        <div className='Counter'>
            <div className='score'>
                <span>Current Score:</span>
                {props.score}
            </div>
            <div className='maxScore'>
                <span>Best Score:</span>
                {props.bestScore}
            </div>
        </div>
    );
}
export default Counter;