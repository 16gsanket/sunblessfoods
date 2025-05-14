import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <div className="">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />

      <div className="overflow-auto ">
        <main className="">
          <Outlet />
        </main>
      </div>

    </div>
  );
}

export default AppLayout;