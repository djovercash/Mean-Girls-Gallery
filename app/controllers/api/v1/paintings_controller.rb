class Api::V1::PaintingsController < ApplicationController

  def index
    @paintings = Painting.all
    render json: @paintings
  end

  def show
    @painting = Painting.find_by(id: params[:id])
    render json: @painting
  end

  def update
    @painting = Painting.find_by(id: params[:id])
    @painting.update(painting_params)
    render json: @painting
  end


  private

  def painting_params
    params.require(:painting).permit(:liked)
  end


end
