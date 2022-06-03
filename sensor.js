class Sensor {
    constructor(car) {
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI / 4;
        this.rays = [];
    }

    update() {
        this.rays = [];

        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                i / (this.rayCount - 1)
            );

            const start = { x: 0, y: 0 };
            const end = {
                x: -Math.sin(rayAngle) * this.rayLength,
                y: -Math.cos(rayAngle) * this.rayLength
            };
            this.rays.push([start, end]);
            console.log(this.car.x);
            console.log(this.car.y);
            console.log(start);
            console.log(end);
            console.log(this.rays[0][0].x);
            console.log(this.rays[0][0].y);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.rayCount; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";

            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );

            ctx.lineTo(
                this.rays[i][1].x,
                this.rays[i][1].y
            );
            ctx.stroke();
        }
    }
}