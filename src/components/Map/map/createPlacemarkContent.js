export const styles = {
  blue: {
  },
  white: {
    color: '#056ECF',
    backgroundColor: '#ffffff',
    fontSize: '12px',
    borderColor: '#056ECF',
    svgBottomSize: {
      height: '12',
      width: '16',
    },
    size: {
      minWidth: '61px',
      minHeight: '26px',
    }
  },
  // red: {
  //   svgBottomSize: {
  //     height: '13',
  //     width: '18',
  //   },
  //   zIndex: 100,
  //   size: {
  //     minWidth: '61px',
  //     minHeight: '26px',
  //   }
  // }
}

export const createPlacemarkContent = () => {

  return ymaps?.templateLayoutFactory?.createClass(`
    <style>
      .placemark__wrapper {
        width: 100px;
        height: 32px;
      }
  
      .placemark__content {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        position: relative;
        padding: 0 8px;
        
        border-radius: 50px;
        min-width: 61px;
        min-height: 26px;
      }

      .blue {
        color: #ffffff;
        background: #056ECF;
        font-size: 12px;
        border: 2px solid #056ECF;
      }

      .blue svg path, .blue svg rect{
        fill: #056ECF;
        stroke: #056ECF;
      }

      .white {
        color: #056ECF;
        background: #ffffff;
        font-size: 12px;
        border: 2px solid #056ECF;
      }

      .white svg path {
        fill: #ffffff;
      }

      .white svg rect {
        fill: #ffffff;
      }

      .red {
        color: #ffffff;
        background: #FF3C6B;
        font-size: 14px;
        border: 2px solid #FF3C6B;
        z-index: 100;
      }

      .red svg path, .red svg rect{
        fill: #FF3C6B;
        stroke: #FF3C6B;
      }
  
      .placemark__content svg{
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translate(-50%, -4px);
      }

      .bar {
        background-color: red;
      }
    </style>
      <div class="placemark__wrapper" data-placemark-id="$[properties.objectId]">
        <div class="placemark__content $[properties.class] $[properties.activeClass]">
          $[properties.iconContent]
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.12329 10.2451L13.7142 3.25653C13.7417 3.22206 13.7485 3.19568 13.7504 3.17573C13.7526 3.15145 13.7482 3.12084 13.7332 3.0895C13.7181 3.05815 13.6969 3.03562 13.6766 3.0222C13.6599 3.01117 13.635 3 13.5909 3H8H2.40914C2.36501 3 2.34015 3.01117 2.32342 3.0222C2.30307 3.03562 2.2819 3.05815 2.26683 3.0895C2.25177 3.12084 2.2474 3.15145 2.24963 3.17573C2.25147 3.19568 2.25828 3.22206 2.28585 3.25653L7.8767 10.2451C7.93991 10.3241 8.06009 10.3241 8.12329 10.2451Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
            <rect width="16" height="4" fill=""/>
          </svg>
        </div>
      </div>`)
}
