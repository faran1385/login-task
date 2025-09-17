import {StoredUserData, User} from "@/components/ui/login/types";

export const setUser = (user: User) => {
    const storedUser: StoredUserData = {
        name: user.name.first + ` ` + user.name.last,
        email: user.email,
        picture: {
            large: user.picture.large,
            small: user.picture.thumbnail,
            medium: user.picture.medium,
        }
    }

    localStorage.setItem("user", JSON.stringify(storedUser))
}

export const removeUser = () => {
    localStorage.removeItem("user")
}

export const getUser = (): null | StoredUserData => {
    return JSON.parse(localStorage.getItem("user") ?? "null")
}