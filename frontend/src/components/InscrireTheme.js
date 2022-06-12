import React from 'react';

class InscrireTheme extends React.Component {

  render() {
    return (
        <div className="modal fade" id="inscrireTheme" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Création de votre theme</div>
                    <div className="modal-footer">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Nom du theme" aria-label="Nom du theme" aria-describedby="button-addon2" id="nomTheme"/>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Confirmer</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default InscrireTheme;
