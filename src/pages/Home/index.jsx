import React, { useState } from 'react';
import styles from './Home.module.css';
import { fetchCarros } from '../../services/api';

function Home() {
    const [car, setCarros] = useState([]);

    const carregaCarros = async (marca) => {
        try {
            const carros = await fetchCarros(marca);
            setCarros(carros);
        } catch (error) {
            console.error("Erro de acesso api: ", error);
        }
    };

    return (
        <>
            <section className={styles.home}>
                <div>
                    <p>
                        Olá, nós somos a <span>Turbo</span>, Empresa de carros
                    </p>
                    <p className={styles.botoes}>
                        <button onClick={() => carregaCarros('honda')} id='btnHonda' className={styles.btn}>Honda</button>
                        <button onClick={() => carregaCarros('volks')} id='btnVolks' className={styles.btn}>Volkswagen</button>
                        <button onClick={() => carregaCarros('fiat')} id='btnFiat' className={styles.btn}>Fiat</button>
                        <button onClick={() => carregaCarros('ford')} id='btnFord' className={styles.btn}>Ford</button>
                        <button onClick={() => carregaCarros('toyota')} id='btnToyota' className={styles.btn}>Toyota</button>
                    </p>
                </div>

                <div className={styles.Card}>
                    {/* Renderizando os carros */}
                    {car.length > 0 ? (
                        car.map((carro, index) => (
                            <div className={styles.sla} key={index}>
                                <h1 className={styles.titulo_carro}>{carro.modelo}</h1>
                                <h3 className={styles.info_carro}>{carro.ano}</h3>
                                <h3 className={styles.info_carro}>{"R$" + carro.preco}</h3>
                                <h3 className={styles.info_carro}>{carro.cor}</h3>
                                {/* Adicione outros elementos do carro aqui */}
                            </div>
                        ))
                    ) : (
                        <p>Ainda não carregou nenhum carro.</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Home;
