

import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "./stores/index";
import { Navigation } from './navigation/navigation';

export default function App() {

  const dispatch = useAppDispatch(); 

  return (
    <div>
      <Navigation />
    </div>
  );
}
