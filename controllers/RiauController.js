import RiauMenu from "../models/RiauModel.js";

export const createRiauMenu = async (req, res) => {
  const { name, description, restaurant_name, google_maps_link, rating } =
    req.body;

  if (
    !name ||
    !description ||
    !restaurant_name ||
    !google_maps_link ||
    rating == null
  ) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const newMenu = await RiauMenu.create({
      name,
      description,
      restaurant_name,
      google_maps_link,
      rating,
    });
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to create menu item" });
  }
};

export const getRiauMenu = async (req, res) => {
  try {
    const menus = await RiauMenu.findAll();
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to retrieve menu items" });
  }
};

export const deleteRiauMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await RiauMenu.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ msg: "Menu item not found" });
    }

    res.status(200).json({ msg: "Menu item deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to delete menu item" });
  }
};
