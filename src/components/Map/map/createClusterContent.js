export const createClusterContent = () => {
    return ymaps.templateLayoutFactory.createClass(
        `
        <style>
            .cluster__content {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                min-height: 20px;
                min-width: 20px;
                color: #056ECF;
                font-size: 12px;
                line-height: 150%;
                font-weight: 700;
            }
        </style>
        <div class="cluster__content">
            {{ properties.geoObjects.length }}
        </div>`
    )
}