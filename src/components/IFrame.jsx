export default (props) => {
    return (
        <div className="w-full h-full overflow-auto flex items-center justify-center flex-wrap ">
            <img src={props.img} alt="img" className="w-full" />
        </div>
    )
}