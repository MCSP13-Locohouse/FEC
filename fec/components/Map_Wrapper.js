import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from './Map'

const render = (status) => {
    switch (status) {
        case Status.LOADING:
            return <div>LOADING MAP...</div>;
        case Status.FAILURE:
            return <div>{`MAP LOAD FAILED!`}</div>;
        case Status.SUCCESS:
            return <Map />;
    }
};

const MapApp = () => <Wrapper apiKey="AIzaSyBh2f-Z7UY4_KKSNdxZf0feK5Z3nf8d1Sol" render={render} />;

export default MapApp;