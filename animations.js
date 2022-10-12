// You can change this,
// but will need to change swatch-holder's tile settings in CSS
const SWATCH_SIZE = 300;

// Looping Animation inspirations
// https://www.thisiscolossal.com/2018/11/hand-drawn-gifs-by-benjamin-zimmerman/
// https://www.thisiscolossal.com/2018/04/animation-of-sinusoidal-waves-in-gifs-by-etienne-jacob/
// https://www.thisiscolossal.com/2018/08/gifs-by-marcus-martinez/
//

let animations = [
	//================================================
	// TODO: Copy and paste this example to make your own animations

	{
		title: "Attempt at ocean looking perlin noise",
		description: "a red dot moving <p>another paragraph</p>",
		isActive: true, // Set this to "true" to show this animation

		setup(p) {
			this.loopTime = 1;
		},
		draw(p, t) {
			p.background(70);
			p.fill(0);
			// How many tiles and how big are they?
			let count = 90;
			let tileSize = p.width / count;
			let noiseScale = 0.01;

			for (let i = 0; i < count; i++) {
				for (let j = 0; j < count; j++) {
					let x = tileSize * i;
					let y = tileSize * j;

					let hue = 197;
					// let colorNoise = 20 * p.noise
					let noise = 500 * p.noise(x * noiseScale, y * noiseScale, t / 5);

					// Wrap the hue around 306 degrees, P5 can't handle >360 hues
					p.fill(hue, 100, noise / 6 + 25, 1);
					p.noStroke();
					p.rect(x, y, tileSize * 0.9);
				}
			}
		},
	},
	{
		title: "Bouncing Ball",
		description: "a red dot moving <p>another paragraph</p>",
		isActive: true, // Set this to "true" to show this animation

		setup(p) {
			this.gravity = 0.2;
			this.ySpeed = 0;
			this.y = 40;
			this.radius = 20;
		},
		draw(p, t) {
			p.background(260, 20, 33);
			p.fill(0, 100, 50);
			let x = (t * 100) % (p.width + 40);
			this.ySpeed = this.ySpeed + this.gravity;
			this.y = this.y + this.ySpeed;
			if (this.y + this.radius > SWATCH_SIZE) {
				this.ySpeed *= -1;
				this.y = SWATCH_SIZE - this.radius;
			}
			if (x + this.radius > SWATCH_SIZE) {
				const tempX = x + this.radius - SWATCH_SIZE - 58;
				p.circle(tempX, this.y, this.radius * 2);
			}

			p.circle(x, this.y, this.radius * 2);
		},
	},
	{
		title: "Transformation",
		description:
			"Push/pop transformations let you rotate, scale, and more! Watch the <a href='https://www.youtube.com/watch?v=o9sgjuh-CBM'>Coding Train explanation</a> for more",
		isActive: true,

		setup(p) {
			this.loopTime = 5;
		},
		draw(p, t) {
			p.background(180, 50, 20);
			p.fill(255);
			let x = (t * 100) % (p.width + 40);
			p.fill(180, 50, 70, 0.5);
			p.rect(-10, -40, 30, 20);
			p.rect();
			p.rect();

			p.push();
			//       Move to the center of the canvas
			p.translate(p.width / 2, p.height / 2);
			p.noStroke();
			p.fill(180, 50, 70, 0.5);
			// Notice that now a circle at 0,0 is in the MIDDLE!
			p.rect(-20, 0, 40, 200);

			let count = 4;
			let petalLength = 100;
			let petalWidth = 40;
			let dTheta = (2 * Math.PI) / count;

			let flowerHue = 270;
			p.fill(320, 100, 50);

			// Draw a flower by rotating before drawing each petal
			for (let i = 0; i < count; i++) {
				p.push();
				p.rotate(i * dTheta + t);

				p.fill(flowerHue, 100, 50);
				p.ellipse(petalLength * 0.9, 0, petalLength, petalWidth);

				// Petal highlight
				p.fill(flowerHue, 100, 70);
				p.ellipse(petalLength, 0, petalLength * 0.6, petalWidth * 0.6);

				p.pop();
			}

			p.fill(50, 100, 50);
			p.circle(0, 0, 40);

			// Show that rectangles rotate too!
			for (let i = 0; i < count; i++) {
				p.push();
				p.rotate(i * dTheta + t - 3.1);

				p.fill(40, 100, 90);
				p.rect(0, 20, 5, 20);

				p.pop();
			}

			p.pop();
		},
	},

	{
		title: "Bouncing Ball",
		description: "a red dot moving <p>another paragraph</p>",
		isActive: true, // Set this to "true" to show this animation

		setup(p) {},
		draw(p, t) {
			p.translate(p.width / 2, p.height / 2);
			p.rotate(t);
			let x = 5 * t * p.cos(2 * t);
			let y = 5 * t * p.sin(2 * t);
			p.stroke(0, 0, 0, 0.08);
			p.fill((320 + t * 10) % 360, 100, 50, 0.25);
			p.circle(x, y, 40);
		},
	},
];
