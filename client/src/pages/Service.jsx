import { useAuth } from "../store/auth"

export const Service=()=>{
    const{ services } = useAuth();
    return(
        <section className="section-services">  
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">

                {
                    services.map((crrElem,index)=>{
                        const{price,description,provider,service}=crrElem;
                        return <div className="card" key={index}>
                            <div className="card-img">
                                <img 
                                src="/images/design.png" 
                                alt="design img" 
                                width="200"
                                height="200"
                                />
                            </div>

                            <div className="card-details">
                                <div className="grid grid-two-cols" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                                    <p>{provider}</p>
                                    <p>{price}</p>
                                </div>
                                <h2>{service}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    })
                }
                
            </div>
        </section>
    );
};