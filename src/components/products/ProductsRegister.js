import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterProducts = () => {

    //State Iniciar Sesion

    const [nombre, setNombre] = useState("");
    const [sku, setSku] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [store, setStore] = useState("");
    const [image, setImage] = useState("");
    const [fallo1, guardarFallo1] = useState(false);
    const [error1, guardarError1] = useState();

    const onSubmit = e => {
        e.preventDefault();
        //datosConsulta1(nombre, sku, stock, price, category, store, image);
        if (nombre === '' || sku === '' || stock === '', price === '', category === '', store=== '', image ==='') {
            guardarFallo1(true);
            guardarError1("Todos los campos son requerid")

        } else {
             e.target.reset()
            setNombre('');
            setSku('');
            setStock('');
            setPrice('');
            setCategory('');
            setStore('');
            setImage('');
            guardarFallo1(false);
            
        }
    }


    // const datosConsulta1 = (dato1, dato2, dato3, dato4, dato5, dato6, dato7) => {

    //     if (dato1 === '' || dato2 === '' || dato3 === '', dato4 === '', dato5 === '', dato6=== '', dato7 ==='') {
    //         guardarFallo1(true);
    //         guardarError1("Todos los campos son requeridos");

    //     } else {
             
    //         setNombre('');
    //         setSku('');
    //         setStock('');
    //         setPrice('');
    //         setCategory('');
    //         setStore('');
    //         setImage('');
    //         guardarFallo1(false);
            
    //     }

    // }

    let componente;
    if (fallo1) {
        componente = error1
        console.log(componente)
    } else {
        componente = null
    }



    const registerProducts = async () => {
        const userData = {
            name: nombre,
            sku: sku,
            stock: stock,
            price: price,
            category: category,
            store: store,
            image: image
        }
        console.log(JSON.stringify(userData));

        try {
            const response = await fetch("http://localhost:4000/register-product", {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
            console.log(user);
        } catch (e) {
            console.log(e)
        }
    }

   

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark" >
                <h1>Registrar Producto</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            onChange={e => setNombre(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="sku">Sku</label>
                        <input
                            type="text"
                            id="sku"
                            name="sku"
                            placeholder="Sku"
                            onChange={e => setSku(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="stock">Stock</label>
                        <input
                            type="text"
                            id="stock"
                            name="stock"
                            placeholder="Stock"
                            onChange={e => setStock(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="ciudad">Precio</label>
                        <input
                            type="text"
                            id="precio"
                            name="precio"
                            placeholder="Precio"
                            onChange={e => setPrice(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="categoria">Categoria</label>
                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            placeholder="Categoria"
                            onChange={e => setCategory(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="Store">Store</label>
                        <input
                            type="text"
                            id="store"
                            name="store"
                            placeholder="Store"
                            onChange={e => setStore(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Image"
                            onChange={e => setImage(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" onClick={registerProducts}
                            value="Registrar"
                        />

                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
                <div className=" error" style={{ color: 'yellow', borderRadius: 9, textAlign: 'center' }} >
                    {componente}
                </div>
            </div>
        </div>

    );
}

export default RegisterProducts;