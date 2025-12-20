import { useState } from "react"
import { useAuth } from "../store/auth"
import { FaSearch } from "react-icons/fa"

export const Service=()=>{
    const{ services } = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    // Filter services based on search term
    const filteredServices = services.filter(service =>
        service.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.provider.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <section className="section-services">
            {/* Search Icon in Top Right Corner */}
            <div className="search-icon-container">
                <button 
                    className="search-toggle-btn"
                    onClick={() => setShowSearch(!showSearch)}
                    aria-label="Toggle search"
                >
                    <FaSearch />
                </button>
            </div>

            {/* Search Input (shows when icon is clicked) */}
            {showSearch && (
                <div className="container">
                    <div className="search-container">
                        <div className="search-input-container">
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">

                {
                    filteredServices.length > 0 ? (
                        filteredServices.map((crrElem,index)=>{
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
                ) : (
                    searchTerm && (
                        <div className="no-services-found">
                            <p>No services found matching "{searchTerm}".</p>
                        </div>
                    )
                )
                }
                
            </div>
        </section>
    );
};