class Api::V1::CitiesController < ApplicationController
  def index
    cities = City.all
    render json: cities
  end

  def create
    state = State.find_or_create_by(name: params[:state_name])
    city = state.cities.create(name: params[:city_name])
    render json: city
  end
  #
  # private
  #
  # def cities_params
  #   params.require(:city).permit(:name, :mayor, :population)
  # end
end
