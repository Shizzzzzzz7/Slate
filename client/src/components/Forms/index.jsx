import CreateRoomForm from "./CreateRoom";
import JoinRoomForm from "./JoinRoom";

const Forms = () => {
    return (
        <>
            <div className="h-screen flex space-x-20 py-[40px] pb-[300px] justify-center">
                <CreateRoomForm />
                <JoinRoomForm />
            </div>
        </>
    );
}

export default Forms;