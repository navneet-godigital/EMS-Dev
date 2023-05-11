import React from 'react'

function Image() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <a href="/w3images/lights.jpg" target="_blank">
                                <img src="./img/Aboutus/about_us.jpg" alt="Lights" />

                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <a href="/w3images/nature.jpg" target="_blank">
                                <img src="./img/Aboutus/about_us.jpg" alt="Nature" />

                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <a href="/w3images/fjords.jpg" target="_blank">
                                <img src="./img/Aboutus/about_us.jpg" alt="Fjords" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;
