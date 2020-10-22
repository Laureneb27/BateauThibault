import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    constructor(public toastController: ToastController) { }
    addToCart(product) {

        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let elementAlredyInCart = cart.filter(element => element.id == product.id);
            if (elementAlredyInCart.length) {
                elementAlredyInCart[0].quantity++;
            } else {
                product.quantity = 1;
                cart.push(product);
            }
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(cart));

        } else {
            product.quantity = 1;
            localStorage.setItem('cart', JSON.stringify([product]));
        }
        this.presentToast('Le produit a bien été ajouté.');
    }

    addQty(product) {
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let elementInCart = cart.filter(element => element.id == product.id);
            elementInCart[0].quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            this.presentToast('La quantité a bien été augmenté.');
        } else {
            this.addToCart(product);
        }

    }

    removeQty(product) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let elementInCart = cart.filter(element => element.id == product.id);
        elementInCart[0].quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        this.presentToast('La quantité a bien été réduite.');
    }

    deleteProduct(product) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let elementInCart = cart.filter(element => element.id != product.id);
        localStorage.setItem('cart', JSON.stringify(elementInCart));
        this.presentToast('Le produit a bien été supprimé.');
    }

    getQty(product) {
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let elementInCart = cart.filter(element => element.id == product.id);
            return elementInCart;
        }
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
}
