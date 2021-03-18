import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import mekki from "./profile/mekki.jpg";
function handleClick(e) {
    alert(e);
}
function App() {
    return (
        <div className="App">
            <ProfileComponent
                firstname="Mekki"
                lastname="BAHRI"
                address="mekkibahri15@gmail.com"
                profession="full stack JavaScript developer"
                functiontouse={handleClick}
                styleimage={{
                    width: "38%",
                    height: "100%",
                    borderRadius: "100%",
                    margin: "auto 3%",
                }}
                styleinfo={{
                    padding: "3%",
                    margin: "auto 0",
                    borderLeft: "solid #ffffff",
                    backgroundColor: "#9e9e9e2b",
                    color: "#607d8b",
                }}
            >
                {mekki}
            </ProfileComponent>
        </div>
    );
}
export default App;
