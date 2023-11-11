import { createRoot } from 'react-dom/client';
import './index.scss';
import { MainView } from './components/MainView/main-view';


const Restaurant = () => {
    return (
        <div className='restaurant'>
            <MainView />
        </div>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<Restaurant />);