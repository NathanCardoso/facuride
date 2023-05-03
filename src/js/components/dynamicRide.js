import getData from "../service/firebase.js";

async function dynamicRide() {
  const rideList = document.querySelector(".ride-list");
	console.log(rideList)
  try {
    const dataRide = await getData();
    dataRide.forEach((ride) => {
      rideList.innerHTML += `
			<li class="item-list">
			<div class="wrapper">
				<div class="wrap">
					<div class="item-profile">
						<img src="./src/svg/drive-profile.svg" alt="Drive Profile">
					</div>
					<div class="item-information">
						<div class="information-title">
							<h2 class="title">${ride.Motorista}</h2>
						</div>
						<ul class="star-list">
							<li class="item-star">
								<img src="./src/svg/star.svg" alt="star">
							</li>
							<li class="item-star">
								<img src="./src/svg/star.svg" alt="star">
							</li>
							<li class="item-star">
								<img src="./src/svg/star.svg" alt="star">
							</li>
							<li class="item-star">
								<img src="./src/svg/star.svg" alt="star">
							</li>
							<li class="item-star">
								<img src="./src/svg/star.svg" alt="star">
							</li>
						</ul>
						<ul class="ride-information-list">
							<li class="item-information-ride"><p class="paragraph">Curso: ${ride.Curso}</p></li>
							<li class="item-information-ride"><p class="paragraph">Carro: ${ride.Carro}</p></li>
							<li class="item-information-ride"><p class="paragraph">Placa: ${ride.Placa}</p></li>
							<li class="item-information-ride"><p class="paragraph">Origem: ${ride.Origem}</p></li>
							<li class="item-information-ride"><p class="paragraph">Destino: ${ride.Destino} Itaipu</p></li>
							<li class="item-information-ride"><p class="paragraph">Horario de saída: ${ride.HorarioSaida}</p></li>
						</ul>
					</div>
				</div>
				<div class="open-car-button">
					<a href="./ride-confirmed.html" class="button">Entrar 1/4</a>
				</div>
			</div>
		</li>
			`;
    });
  } catch (error) {
    throw error;
  }
}

export default dynamicRide;
