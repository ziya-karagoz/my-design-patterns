import { SplitScreen } from "./patterns/SplitScreen";

const LeftHandComponent = (props) => {
  return <h1 style={{ border: "1px solid red" }}>{props.name}</h1>;
};
const RightHandComponent = (props) => {
  return <h3 style={{ border: "1px solid green" }}>{props.message}</h3>;
};
function App() {
  return (
    <div>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name='Ziya' />
        <RightHandComponent message='Bu isi yapiyoruz' />
      </SplitScreen>
    </div>
  );
}

export default App;
