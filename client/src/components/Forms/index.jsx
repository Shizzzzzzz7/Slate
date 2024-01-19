import CreateRoomForm from "./CreateRoom";
import JoinRoomForm from "./JoinRoom";

const Forms = () => {
    return (
        <>
            <div className="h-screen flex space-x-20 items-center justify-center">
                <CreateRoomForm />
                <JoinRoomForm />
            </div>
        </>
    );
}

export default Forms;